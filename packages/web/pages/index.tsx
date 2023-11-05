import { Inter } from 'next/font/google';
import Layout from '../components/layout';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <div>
        <p>Hello.</p>
      </div>
    </Layout>
  );
}
