interface Props {
    title: string,
    text: string,
}


function Description(props: Props) {
    return (
        <div>
            <div className='title'> <h1>{props.title}</h1> </div>
            <div className='text'> <p>{props.text}</p> </div>

        </div>
    )
}
export default Description;