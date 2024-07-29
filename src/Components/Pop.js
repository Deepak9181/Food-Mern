const Pop = (prop) => {
    const {message,color}=prop.data;
    // console.log(message);
    return (
        <div className="pop-container fixed top-[78px] right-6 " >
            <div className="border-4 border-black/50 bg-white rounded-sm text-sm px-4 py-1 shadow-lg "style={{background:color}}>
                <h1 className="text-center text-lg font-semibold">{message}</h1>
            </div>
        </div>
    );
}

export default Pop;
