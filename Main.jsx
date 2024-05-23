function Main(props) {
   
    const [magicBall, setMagicBall] = React.useState({
        img: props.img,
        an1: props.an1,
        an2: props.an2,
        an3: props.an3,
        an4: props.an4,
        an5: props.an5,
        an6: props.an6,
        an7: props.an7,
        an8: props.an8,
        an9: props.an9,
        an10: props.an10,
        an11: props.an11,
        an12: props.an12,
        an13: props.an13,
        an14: props.an14,
        an15: props.an15,
        an16: props.an16,
        respons: props.respons
        

    });
  

   
    function getRandomQuestion(){
        const questions = [
            magicBall.an1, 
            magicBall.an2, 
            magicBall.an3, 
            magicBall.an4,
            magicBall.an5, 
            magicBall.an6, 
            magicBall.an7, 
            magicBall.an8,
            magicBall.an9, 
            magicBall.an10, 
            magicBall.an11,
            magicBall.an12, 
            magicBall.an13,
            magicBall.an14, 
            magicBall.an15, 
            magicBall.an16
        ];
        return questions[Math.floor(Math.random() * questions.length)];
    };

    const [currentRespons, setCurrentQuestion] = React.useState(getRandomQuestion());

    function update() {
       
        setCurrentQuestion(getRandomQuestion());
        console.log(currentRespons);
    };

    const buttonStyle = {
        backgroundColor: "transparent",
        marginTop: 150,
        marginLeft: 115,
        borderRadius: 10
    };
    return (
        <div>
            <Answers respons={currentRespons} />
            <input type="button" style={buttonStyle} onClick={update} value={"Ask me again"}></input>
        </div>
    );

  
    
}


