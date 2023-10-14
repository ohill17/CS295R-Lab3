function ProfileCard({title, handle, image}){
    //const props = {title, handle};
    return(
        <div>
               <img src={image} alt="Personal Voice Assistant Logo's" />
            <div>
                Title is {title}
            </div>
            <div>
                Handle is {handle}
            </div>
        </div> 
    )
       
    
}
export default ProfileCard;