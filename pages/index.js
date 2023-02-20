import fs from 'fs/promises'
import path from 'path'

function HomePage(props) {
  const { products } = props

  return (
    <ul>
      {products.map((product) => <li key={product.id}>{product.title}</li>)}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const rawData  = await fs.readFile(filePath)
  const data     = JSON.parse(rawData)
  return {
    props:      {
      products: data.products
    },
    revalidate: 10
  }
}

export default HomePage;
