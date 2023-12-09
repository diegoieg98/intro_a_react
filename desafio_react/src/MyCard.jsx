import Tags from "./Tags";

const MyCard = (props) => {
    return(
        <div className='card'>
            <Tags
                img= {props.img}
                nombre={props.nombre}
                descripcion={props.descripcion}
                buttonColor={props.buttonColor}
                raza={props.raza}
            />
        </div>
    )
}
export default MyCard;