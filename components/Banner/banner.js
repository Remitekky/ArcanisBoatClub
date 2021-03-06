import Cta from '../Cta/cta'
import styles from "./Banner.module.css"
import bannerPicture from '../../public/assets/images/1.png'
import nft_badge from '../../public/assets/images/nft_badge_small.png';
import Image from 'next/image'
import Link from 'next/link'

export default function Banner() {
  return(
    <div 
      data-aos="fade-down"
      data-aos-duration="1000"
      className={styles.banner}>
      <section className={styles.intro_text}>
        <header className={styles.intro_heading}>
          <h1>Arcanis boat club <span>10 000 bateaux attendant leur capitaine.</span></h1>
        </header>
        
        <p>
          <strong>Bienvenue à l’Arcanis Boat Club !</strong> <br />
          Ici vous allez découvrir les premières <strong>œuvres d’art génératif d’Arcanis</strong>.
        </p>
        <p>
          Arcanis fait son entrée dans le monde <strong>des NFTs</strong> par la grande porte et délivre une série de <strong>10 000 bateaux exclusifs</strong> naviguant sur la <strong>blockchain Ethereum</strong>.
        </p>
        
        <Link href="https://opensea.io/collection/arcanisboatclub/" passHref>
          <Cta
            title='Mint à venir'
          />
        </Link>
      </section>

        <div className={styles.picture}>
          <div className={styles.nft_badge}>
            <Image
              src={nft_badge}
              alt="bagde nft coming soon"
            />
          </div>
          <Image 
            src={bannerPicture}
            placeholder="blur"
            layout='responsive'
            priority
            alt='Image NFT Arcanis Boat Club'
          />
      </div>
    </div>
  )
}