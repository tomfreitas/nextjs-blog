import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from './../lib/posts'


export default function Home ({ allPostsData }) {
    console.log(allPostsData);
  return (
    <>
    <Head>
        <title>{siteTitle}</title>
    </Head>
    <Layout home>
      <section className={ `${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLG}>Blog</h2>
        <ul className={utilStyles.list}>
          {(allPostsData || []).map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}<br />{id}<br />{date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
    </>
  );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    console.log(allPostsData);
    return {
        props: { 
            allPostsData,
        }, 
    };    
}