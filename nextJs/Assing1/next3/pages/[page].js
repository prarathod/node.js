import {useRouter} from "next/router";
import styles from '../styles/Home.module.css'

const page = ()=>{
    const router = useRouter();
    const pageNumber = router.query.page;
    return (
        <>
           <div className={styles.main}>
           <h1 className={styles.title}>Hello Welcome {pageNumber}</h1>
           </div>
        </>
    );
};

export default page;