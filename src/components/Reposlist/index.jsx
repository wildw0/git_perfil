import { useEffect, useState } from "react"

import styles from './ReposList.module.css'

const RepoList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState ([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
        })
    }, [nomeUsuario]);

    return (
        <dir className="container"> 
            <ul className={styles.list}>
                {repos.map(({id, name, language, html_url}) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> 
                            {name} 
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b> 
                            {language}  
                        </div>
                        <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a> 
                    </li>
                ))}
            </ul>
        </dir>
    )
}

export default RepoList