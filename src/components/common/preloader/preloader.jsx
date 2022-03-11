import preload from '../../../assets/images/preload.gif';

const Preloader = (props) => {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <img src={preload} />
        </div>
    )
}

export default Preloader;