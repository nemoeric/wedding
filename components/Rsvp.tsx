"use client"
import {useState} from "react"
import Image from "next/image"
import {logout} from "@/utils/serverActions"
import Card from "./daisyui/card"

const Rsvp = ({user}:{
  user: any
}) => {
 
  const [formData, setFormData] = useState(user)
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
        
    <Card>
      <div className="grid gap-4 md:grid-cols-6">
        <Image
          src={formData.image || "/placeholder_h.png"}
          alt="Picture of the author"
          className="mask mask-hexagon-2"
          width={500}
          height={500}
        />
        <div className="col-span-5">
          <h2 className="font-serif text-6xl">
            {formData.firstName} {formData.lastName}
          </h2>
          <div className="pb-6 italic">
            {formData.email}
          </div>

          {/* FOOD RESTRICTIONS */}
          <div className="border p-2">
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Avez-vous des alérgies / restrictions alimentaires ?</span>
                <input type="checkbox" className="toggle toggle-primary" name="hasFoodRestrictions" checked={formData.hasFoodRestrictions} onChange={(e)=>{
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
            <div className="divider">JEUDI</div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Je serai présent.e</span>
                <input type="checkbox" className="toggle toggle-primary" name="thursdayWillAttend" checked={formData.thursdayWillAttend} onChange={(e)=>{
                  setFormData({...formData, thursdayWillAttend: e.target.checked })
                }} />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">{`J'ai besoin d'une solution de transport`}</span>
                <input type="checkbox" className="toggle toggle-primary" name="thursdayWillNeedTransport" checked={formData.thursdayWillNeedTransport} onChange={(e)=>{
                  setFormData({...formData, thursdayWillNeedTransport: e.target.checked })
                }} />
              </label>
            </div>

            <div className="divider">VENDREDI</div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Je serai présent.e</span>
                <input type="checkbox" className="toggle toggle-primary" name="fridayWillAttend" checked={formData.fridayWillAttend} onChange={(e)=>{
                  setFormData({...formData, fridayWillAttend: e.target.checked })
                }} />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
              <span className="label-text">{`J'ai besoin d'une solution de transport`}</span>
                <input type="checkbox" className="toggle toggle-primary" name="fridayWillNeedTransport" checked={formData.fridayWillNeedTransport} onChange={(e)=>{
                  setFormData({...formData, fridayWillNeedTransport: e.target.checked })
                }} />
              </label>
            </div>

            <div className="divider">SAMEDI</div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Je serai présent au déjeuner</span>
                <input type="checkbox" className="toggle toggle-primary" name="saturdayWillAttend" checked={formData.saturdayWillAttend} onChange={(e)=>{
                  setFormData({...formData, saturdayWillAttend: e.target.checked })
                }} />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
              <span className="label-text">{`J'ai besoin d'une solution de transport`}</span>
              <input type="checkbox" className="toggle toggle-primary" name="saturdayWillNeedTransport" checked={formData.saturdayWillNeedTransport} onChange={(e)=>{
                  setFormData({...formData, saturdayWillNeedTransport: e.target.checked })
              }} />
              </label>
            </div>
            <form onSubmit={handleFormSubmit} className="w-full">
              <button className="btn btn-primary mt-4 btn-block mb-2">
                {isLoading && <span className="loading loading-spinner"></span> }
                <span>
                  Enregistrer
                </span>
              </button>
            </form>
            <button className="btn" onClick={()=>logout()}>
              Déconnexion
            </button>


          </div>


        </div>

      </div>
      {toastMarkup}
    </Card>



  )
}
export default Rsvp