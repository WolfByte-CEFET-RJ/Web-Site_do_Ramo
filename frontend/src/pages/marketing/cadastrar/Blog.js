import {useState} from "react";
import NavBar from "../../../components/NavBar/NavBar";
import SelectImage from "../../../components/SelectImage/SelectImage";
import styles from '../../../styles/blogCadastrar.module.scss'


export default function cadastrar(){
  const [title,setTitle] = useState('')
  const [resume,setResume] = useState('')
  const [postText,setPostText] = useState('')
  
  function handleSubmit(event) {
    event.preventDefault()
  }

  return(
    <div className={styles.container}>
      <NavBar/>
      <form onSubmit={handleSubmit} id={styles.content}>
        
        {/* Sessão de inputs */}
        <fieldset id={styles.fieldset}>
            <legend id={styles.label} >Posts</legend>

            <h1 className={styles.inputLabel}>Título</h1>
            <input id={styles.inputTitle} value={title} 
            onChange={event => setTitle(event.target.value)} />

            <h1 className={styles.inputLabel}>Resumo</h1>
            <input id={styles.resumeInput} value={resume} 
            onChange={event => setResume(event.target.value)} />
   
            <h1 className={styles.inputLabel}>Imagens</h1>
            <div className={styles.imagesContainer}>
              <SelectImage />
              <SelectImage />
              <SelectImage />
            </div>

            <h1 className={styles.inputLabel}>Texto do post</h1>
            <input id={styles.textPostInput} value={postText} 
            onChange={event => setPostText(event.target.value)} />
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
