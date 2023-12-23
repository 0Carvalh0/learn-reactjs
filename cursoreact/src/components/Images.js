import img02 from '../assets/img02.jpg'

const Images = () => {
    return (
        <div>
            <img src="/img01.jpg" />
            <img src={img02} />
        </div>
    )
}

export default Images;