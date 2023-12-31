import './reaktDeco.scss';



const ReaktDeco = ({ bottom, left, width, height, zIndex, imageSrc  }) => {
    const reaktDecoStyle = {
        position: 'absolute',
        bottom: bottom || '-20%',
        left: left || '-10%',
        zIndex: zIndex || '',
        width: width,
        height: height,
    };
  
    return (
        <div className="reakt-deco" style={reaktDecoStyle}>
            <img className='reactsvg' src={imageSrc} alt="ReactSVG"/>
        </div>
    );
  };
export default ReaktDeco;