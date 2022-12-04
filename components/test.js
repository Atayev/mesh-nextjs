export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/data.json')
    const data = await res.json()

    return {
        props: {
            test: data.slider
        }
    }
}

const Test = ({test}) => {

    return ( 
        <div>
            {console.log(test)}
            <h1>Hello</h1>
        </div>
     );
}
 
export default Test;