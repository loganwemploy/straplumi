import Head from "next/head";
import { useRouter } from "next/router";
import ProductsList from "../../components/ProductsList";
// import { getCategories, getCategory } from "../../utils/api";

const CategoryPage = ( ) => {
// const CategoryPage = ({ category }) => {
  // const router = useRouter();
  // if (router.isFallback) {
  //   return <div>Loading category...</div>;
  // }

  return (
    <div>
      <Head>
        <title> products</title>
        {/* <title>{category.name} products</title> */}
      </Head>
      <ProductsList />
      {/* <ProductsList products={category.products} /> */}
    </div>
  );
};

export default CategoryPage;

// export async function getStaticProps({ params }) {
//   const category = await getCategory(params.slug);
//   return { props: { category } };
// }

// export async function getStaticPaths() {
//   const categories = await getCategories();
//   console.log('categories',categories);
//   return {
//     paths: categories.map((_category) => {
//       return {
//         params: { slug: _category.slug },
//       };
//     }),
//     fallback: true, 
//   };
// }
