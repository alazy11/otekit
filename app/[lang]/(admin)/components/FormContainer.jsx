
const FormContainer = ({handleSubmit,children,id,cssStyle = "grid-cols-1 sm:grid-cols-2"})=> {

    return (
        <form action="" id={id} onSubmit={handleSubmit}
        onKeyDown={(e)=>{
            if(e.key === 'Enter') {
                handleSubmit(e)
            }
        }}
        className={`grid 
        ${cssStyle} gap-4 sm:gap-6`}>
            {children}
        </form>
    )

};

export default FormContainer;