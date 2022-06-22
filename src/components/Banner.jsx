import React from 'react';
import '../styles/banner.css';

function Banner() {
  return (
    <section className="box-banner-border">
      <div className="box-banner">
        <figure className="box-developer">
          <p className="logo-text">I'M</p>
          <p className="logo-text">DEVELOPER</p>
        </figure>
        <img
          className="desenho-banner"
          src="https://img.freepik.com/vetores-gratis/desenvolvedores-web-desenhados-a-mao_23-2148819604.jpg?t=st=1655858784~exp=1655859384~hmac=d20be1b9ab6b359e7a1b3d9b3564bf89e7a9c346a0899146d19f0855654d02f5&w=900"
          alt="minha foto"
        />
        <img
          className="foto-banner"
          src="https://scontent.fplu1-1.fna.fbcdn.net/v/t1.6435-9/44806563_2044118582318689_290707666043404288_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHH4cBHXTJWZW9Mbw9LeoJXOvF5uxsqw9o68Xm7GyrD2rbzxGy96TBgLV4aWU_x7uqwJRpbaHy3v7bJkU18jblV&_nc_ohc=cEGBVPPnDk8AX-zY20u&_nc_ht=scontent.fplu1-1.fna&oh=00_AT8q5smJ92yeBC05o5JVBTf6k_3CPA85Ye_RFr0n2YvmXw&oe=62D8EBF3"
          alt="minha foto"
        />
      </div>
      <div className="button-box-banner">
        <button type="button" className="btn btn-outline-primary">It's me</button>
        <button type="button" className="btn btn-outline-success">Projetos</button>
      </div>
    </section>
  )
}

export default Banner