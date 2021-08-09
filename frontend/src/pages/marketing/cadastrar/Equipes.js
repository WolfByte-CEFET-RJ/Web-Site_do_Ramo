import {useState} from "react";
import NavBar from "../../../components/NavBar/NavBar";
import SelectImage from "../../../components/SelectImage/SelectImage";
import styles from '../../../styles/equipesCadastrar.module.scss'

export default function Cadastrar(){

  const [title,setTitle] = useState('')
  const [text, setText] = useState('')
  const [images,setImages] = useState(null)
  const [previewImages, setPreviewImages] = useState([])
  const imagesArray = []

  function handleSubmit(event, form) {
    event.preventDefault()
    console.log({ title, text, images })
  }

  function handleSelectImages(event) {
        if(!event.target.files) return
            
        const selectedImages = Array.from(event.target.files)
        setImages(selectedImages)
        const selectedImagesPreview = selectedImages.map(image => {
            return URL.createObjectURL(image)
        })
        imagesArray.push()
        setPreviewImages(selectedImagesPreview)
  }

  return(
    
    <div className={styles.container}>
      <NavBar/>

      <form id={styles.content} onSubmit={handleSubmit}>
        
        <fieldset id={styles.fieldset}>
          <legend id={styles.legend} >Equipes</legend>

          <label class={styles.inputLabel}>Nome da equipe</label>
          <input id={styles.inputTitle} onChange={event => setTitle(event.target.value)} />

          <label class={styles.inputLabel}>Texto</label>
          <textarea id={styles.inputTextarea} onChange={event => setText(event.target.value)} />

          <label class={styles.inputLabel}>Logo</label>
          {previewImages.length != 0 ? <img id={styles.previewImage} src={previewImages[0]} /> : null}
          <div>
            <label htmlFor="imgFile[]" id={styles.imgFileBtn}>Escolher ficheiro</label>
            <input onChange={handleSelectImages} type="file" id="imgFile[]" class={styles.imgFile} />
          </div>
        </fieldset>

        {/* Botões */}
        <div id={styles.btnContainer}>
          <button type="button" id={styles.cancelBtn}>
            <p>cancelar</p>
          </button>
          
          <button type="submit" id={styles.saveBtn}>
            <p>salvar</p>
          </button>
        </div>
      </form>
    </div>
  )
}