"use client"
import {useState} from "react"
import Image from "next/image"
import Card from "./daisyui/card"
import Link from "next/link"

const Rsvp = ({user}:{
  user: any
}) => {
 
  const [initialState, setInitialState] = useState(user)
  const [formData, setFormData]         = useState(user)
  const [showToast, setShowToast] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const toastMarkup = showToast && (
    <div className="toast toast-top toast-right z-30">
      <div className="alert alert-success">
        <span>Vos réponses ont été prises en compte.</span>
      </div>
    </div>
  )

  const handleFormSubmit = async (e:any) => {
    e.preventDefault()
    setIsLoading(true)
    console.log('formData', formData);
    
    // remove key canEdit from formData
    delete formData.canEdit

    let response = await fetch(`/api/users/${formData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    let data = await response.json()
    console.log("data", data)

    setIsLoading(false)
    setShowToast(true)
    // wait 1 second and hide toast
    setTimeout(()=>{
      setShowToast(false)
    }, 3000)

  }
  return (
        
    <Card title="Participation au mariage">

      <div className="alert shadow-lg mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Nous avons pris en compte vos réponses. Pour tout changement, merci de contacter directement Eric.</span>
      </div>

      {/* FOOD RESTRICTIONS */}
      <div className="border p-2 rounded-md bg-amber-100">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Avez-vous des allergies / restrictions alimentaires ?</span>
            <input type="checkbox" disabled className="toggle toggle-primary" name="hasFoodRestrictions" checked={formData.hasFoodRestrictions} onChange={(e)=>{
              setFormData({...formData, hasFoodRestrictions: e.target.checked })
            }} />
          </label>
        </div>
        {formData.hasFoodRestrictions && (
          <textarea 
            className="my-3 textarea textarea-primary w-full rounded-md" 
            placeholder="Décrivez-nous la situation" value={formData.foodRestrictions}
            onChange={(e)=>{
              setFormData({...formData, foodRestrictions: e.target.value })
            }}
            >
            
          </textarea>
        )}
      </div>


      {/* PLANNING */}
      <div className="grid gap-1">
        <div className="divider italic">Jeudi 31 août</div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Je serai présent.e</span>
            <input type="checkbox" disabled className="toggle toggle-primary" name="thursdayWillAttend" checked={formData.thursdayWillAttend} onChange={(e)=>{
              setFormData({...formData, thursdayWillAttend: e.target.checked })
            }} />
          </label>
        </div>
        {formData.thursdayWillAttend && (
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">{`Je prendrais la navette au départ du NH Centro à 16h30 pour me rendre sur le lieu du cocktail`}</span>
              <input type="checkbox" disabled className="toggle toggle-primary" name="thursdayWillNeedTransport" checked={formData.thursdayWillNeedTransport} onChange={(e)=>{
                setFormData({...formData, thursdayWillNeedTransport: e.target.checked })
              }} />
            </label>
          </div>

        )}

        <div className="divider italic">Vendredi 1 septembre</div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Je serai présent.e</span>
            <input type="checkbox" disabled className="toggle toggle-primary" name="fridayWillAttend" checked={formData.fridayWillAttend} onChange={(e)=>{
              setFormData({...formData, fridayWillAttend: e.target.checked })
            }} />
          </label>
        </div>
        {formData.fridayWillAttend && (
        <div className="form-control">
          <label className="cursor-pointer label">
          <span className="label-text">{`Je prendrais la navette au départ du NH Centro à 16h20 pour me rendre sur le lieu du mariage`}</span>
            <input type="checkbox" disabled className="toggle toggle-primary" name="fridayWillNeedTransport" checked={formData.fridayWillNeedTransport} onChange={(e)=>{
              setFormData({...formData, fridayWillNeedTransport: e.target.checked })
            }} />
          </label>
        </div>
        )}
        <div className="divider italic">Samedi 2 septembre</div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Je serai présent.e</span>
            <input type="checkbox" disabled className="toggle toggle-primary" name="saturdayWillAttend" checked={formData.saturdayWillAttend} onChange={(e)=>{
              setFormData({...formData, saturdayWillAttend: e.target.checked })
            }} />
          </label>
        </div>
        {formData.saturdayWillAttend && (
        <div className="form-control">
          <label className="cursor-pointer label">
          <span className="label-text">{`Je prendrais la navette au départ du NH Centro à 12h15 pour me rendre à Foz do Lizandro`}</span>
          <input type="checkbox" disabled className="toggle toggle-primary" name="saturdayWillNeedTransport" checked={formData.saturdayWillNeedTransport} onChange={(e)=>{
              setFormData({...formData, saturdayWillNeedTransport: e.target.checked })
          }} />
          </label>
        </div>
        )}

{/*         
        { initialState == formData ? 
        <button className="btn btn-disabled mt-4 btn-block mb-2">
          <span>
            Enregistrer
          </span>
        </button>
        : 
        <form onSubmit={handleFormSubmit} className="w-full">
          <button className="btn btn-primary mt-4 btn-block mb-2">
            {isLoading && <span className="loading loading-spinner"></span> }
            <span>
              Enregistrer
            </span>
          </button>
        </form>
        } */}

      </div>

      <div className="text-black underline text-center my-10">
        <Link href="/">
          Revoir le programme détaillé
        </Link>
      </div>


      {toastMarkup}
    </Card>



  )
}
export default Rsvp