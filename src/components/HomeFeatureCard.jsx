const HomeFeatureCard = ({imgUrl,title,content}) => {
    return (
        <div className="reveal-content flex items-center max-sm:text-center max-sm:items-center flex-col md:flex-row max-md:items-start gap-4 py-4">
            <div>
                <img src={imgUrl} alt="" className="object-cover"/>
            </div>
            <div>
                <h5 className="text-md md:text-lg font-bold">{title}</h5>
                <p className="text-sm text-gray-9f break-words">{content}</p>
            </div>
        </div>
    )
}

export default HomeFeatureCard