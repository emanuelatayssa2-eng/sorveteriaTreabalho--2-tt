function Home() {
    console.log('home...');
    const nome = 'Tayssa';
    return (
        <>
            <h1 style={style}>Sorveteria Quatro Estações!</h1>

            <p style={{
                color: 'black',
                backgroundColor: '0.4px solid purple',
                fontSize: '24px'
            }}>
                O melhor sorvete a qualquer momento!
            </p>

            <img
                src="https://d2yghbees9788u.cloudfront.net/foodconnection/2023/06/industria-de-sorvete-768x358.jpg"
                alt="Sorvete"
                style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    marginTop: "20px"
                }}
            />

            <p style={{
                marginTop: "30px",
                fontSize: "20px",
                textAlign: "center"
            }}>
                A sorveteria Quatro Estações fornece o melhor sorvete da região, confira nossos produtos!
            </p>


            <div style={galeria}>
                <img
                    src="https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-sorvete-baunilha-caramelo.jpg?quality=70&strip=info&w=620"
                    alt="Produto 3"
                    style={imgStyle}
                />

                <img
                    src="https://blog.gsuplementos.com.br/wp-content/uploads/2020/11/iStock-1173381958.jpg"
                    alt="Produto 1"
                    style={imgStyle}
                />

                <img
                    src="https://blog.gsuplementos.com.br/wp-content/uploads/2020/11/iStock-1264447431.jpg"
                    alt="Produto 2"
                    style={imgStyle}
                />

                <img
                    src="https://conteudo.imguol.com.br/2014/01/10/sorvete-de-maracuja-1389376399656_900x506.jpg"
                    alt="Produto 3"
                    style={imgStyle}
                />

                <img
                    src="https://static.itdg.com.br/images/auto-auto/26932e21a0f61aa86fcf028027c437c6/receita-sorvete-de-menta-com-chocolate-300x200.jpg"
                    alt="Produto 3"
                    style={imgStyle}
                />
            </div>
        </>
    );
}

const style = {
    textAlign: 'center',
    border: '0.4px solid purple'
};

const galeria = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap"
};

const imgStyle = {
    width: "200px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
};

export default Home;
