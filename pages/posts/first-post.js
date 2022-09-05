import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css'

const ImgComponent = () => (
    <Image
        src="/images/profile.jpeg" 
        height={144} 
        width={144} 
        alt="Nome da imagem"
        className={utilStyles.borderCircle}
    />
);

export default function FirstPost() {
    return (
        <>
        <Head>
            <title>First Post</title>
        </Head>
        <Layout>
            <h1>First Post</h1>
            <p>
                <ImgComponent />
            </p>
        </Layout>
       
        </>
    );
}