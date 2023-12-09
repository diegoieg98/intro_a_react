import Header from './Header'
import MyCard from './MyCard'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
      <Header titulo='Adopta un Perrito'/>
      <div className='cards'>
        <MyCard 
          img='https://images.pexels.com/photos/803766/pexels-photo-803766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
          nombre='Bartolo' 
          descripcion='Lleno de energia y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!' 
          buttonColor='success'
          raza='Husky'/>
        <MyCard 
          img='https://media.istockphoto.com/id/93393143/es/foto/pastor-ingl%C3%A9s.jpg?s=612x612&w=is&k=20&c=YzanDbjvKpafWxyJiVQF1OYxurOWzg8ufMIl-iatOfM=' 
          nombre='Messi' 
          descripcion='Es jugueton, amigable y se lleva bien con los niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!' 
          buttonColor='primary'
          raza='Bobtail'/>
        <MyCard 
          img='https://images.pexels.com/photos/16353649/pexels-photo-16353649/free-photo-of-animal-perro-mascota-mono.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
          nombre='Gohan' 
          descripcion='Un perro de tamaño mediano con un corazon gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!' 
          buttonColor='danger'
          raza='Shar Pei'/>
        <MyCard 
          img='https://images.pexels.com/photos/3764319/pexels-photo-3764319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
          nombre='Princesa' 
          descripcion='Es una compañera leal y criñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!' 
          buttonColor='warning'
          raza='Beagle'/>
      </div>
      <Footer footer='Explora nuestra galeria de adopcion de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su escencia unica. Adopta un perro y brindaleuna segunda oportunidad. Encuentra a tu compañero peludo para siempre.'/>
    </>
  )
}

export default App
