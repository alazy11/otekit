
const FormContainer = ({handleSubmit,children,id,cssStyle = "grid-cols-1 sm:grid-cols-2"})=> {

    return (
        <form action="" id={id} onSubmit={handleSubmit} className={`grid 
        ${cssStyle} gap-4 sm:gap-6`}>
            {children}
        </form>
    )

};

export default FormContainer;