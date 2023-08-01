"use client"
import {useState} from "react"
import {useRouter} from "next/navigation"
import Image from "next/image"
import {logout} from "@/utils/serverActions"

const Rsvp = ({user}:{
  user: any
}) => {
 
  const [formData, setFormData] = useState(user)
  const [showToast, setShowToast] = useState(false)

  const toastMarkup = showToast && (
    <div className="toast toast-top toast-right z-30">
      <div className="alert alert-success">
        <span>Vos réponses ont été prises en compte.</span>
      </div>
    </div>
  )

  const handleFormSubmit = async (e:any) => {
    e.preventDefault()
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

    setShowToast(true)
    // wait 1 second and hide toast
    setTimeout(()=>{
      setShowToast(false)
    }, 3000)

  }
  return (
    <div className="px-4 md:px-10 py-8 max-w-screen-xl mx-auto">
      <div className="rounded-lg shadow-xl grid gap-6 p-6 border border-grey text-primary">
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
                  <span className="label-text">Je souhaite prendre la navette aller de 16h30</span>
                  <input type="checkbox" className="toggle toggle-primary" name="thursdayWillNeedShuttleGoing" checked={formData.thursdayWillNeedShuttleGoing} onChange={(e)=>{
                    setFormData({...formData, thursdayWillNeedShuttleGoing: e.target.checked })
                  }} />
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Je serai présent.e au cocktail</span>
                  <input type="checkbox" className="toggle toggle-primary" name="thursdayWillAttend" checked={formData.thursdayWillAttend} onChange={(e)=>{
                    setFormData({...formData, thursdayWillAttend: e.target.checked })
                  }} />
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Je souhaite prendre une des navettes retour à partir de 20h</span>
                  <input type="checkbox" className="toggle toggle-primary" name="thursdayWillNeedShuttleBack" checked={formData.thursdayWillNeedShuttleBack} onChange={(e)=>{
                    setFormData({...formData, thursdayWillNeedShuttleBack: e.target.checked })
                  }} />
                </label>
              </div>

              <div className="divider">VENDREDI</div>

              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Je souhaite prendre la navette aller de 16h20</span>
                  <input type="checkbox" className="toggle toggle-primary" name="fridayWillNeedShuttleGoing" checked={formData.fridayWillNeedShuttleGoing} onChange={(e)=>{
                    setFormData({...formData, fridayWillNeedShuttleGoing: e.target.checked })
                  }} />
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Je serai présent au mariage</span>
                  <input type="checkbox" className="toggle toggle-primary" name="fridayWillAttend" checked={formData.fridayWillAttend} onChange={(e)=>{
                    setFormData({...formData, fridayWillAttend: e.target.checked })
                  }} />
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Je souhaite prendre une des navettes retour</span>
                  <input type="checkbox" className="toggle toggle-primary" name="fridayWillNeedShuttleBack" checked={formData.fridayWillNeedShuttleBack} onChange={(e)=>{
                    setFormData({...formData, fridayWillNeedShuttleBack: e.target.checked })
                  }} />
                </label>
              </div>

              <div className="divider">SAMEDI</div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Je souhaite prendre la navette aller de 12h15</span>
                  <input type="checkbox" className="toggle toggle-primary" name="saturdayWillNeedShuttleGoing" checked={formData.saturdayWillNeedShuttleGoing} onChange={(e)=>{
                    setFormData({...formData, saturdayWillNeedShuttleGoing: e.target.checked })
                  }} />
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Je serai présent au déjeuner de 13h</span>
                  <input type="checkbox" className="toggle toggle-primary" name="saturdayWillAttendLunch" checked={formData.saturdayWillAttendLunch} onChange={(e)=>{
                    setFormData({...formData, saturdayWillAttendLunch: e.target.checked })
                  }} />
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Je serai présent {`l'après midi`} à la plage</span>
                  <input type="checkbox" className="toggle toggle-primary" name="saturdayWillAttendBeach" checked={formData.saturdayWillAttendBeach} onChange={(e)=>{
                    setFormData({...formData, saturdayWillAttendBeach: e.target.checked })
                  }} />
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Je resterai le soir à {`l'aperitif`}</span>
                  <input type="checkbox" className="toggle toggle-primary" name="saturdayWillAttendDinner" checked={formData.saturdayWillAttendDinner} onChange={(e)=>{
                    setFormData({...formData, saturdayWillAttendDinner: e.target.checked })
                  }} />
                </label>
              </div>

              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Je souhaiterai prendre une des navettes pour revenir à Sintra</span>
                  <input type="checkbox" className="toggle toggle-primary" name="saturdayWillNeedShuttleBack" checked={formData.saturdayWillNeedShuttleBack} onChange={(e)=>{
                    setFormData({...formData, saturdayWillNeedShuttleBack: e.target.checked })
                  }} />
                </label>
              </div>
              <form onSubmit={handleFormSubmit} className="w-full">
                <button className="btn btn-primary mt-4 btn-block mb-2">
                  Enregistrer
                </button>
              </form>
              <button className="btn" onClick={()=>logout()}>
                Déconnexion
              </button>


            </div>


          </div>

        </div>
        


      </div>
      {toastMarkup}

    </div>
  )
}
export default Rsvp