// import Tweet from "../../components/Tweet/Tweet"
// import { useContext } from "react"
// import { UserContext } from "../../contexts/userContext"

function About() {

    return (
        <>
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black dark:text-[#248566] pb-4">Nosotros</h1>
                        <p className="font-medium text-base leading-6 text-black dark:text-black">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nemo minima aliquid magnam asperiores impedit, rerum itaque eius laboriosam corrupti tenetur. Alias non reprehenderit iusto nesciunt neque eum rem consequatur.
                        </p>
                    </div>
                    <div className="w-full lg:w-8/12">
                        <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-[#248566] pb-4">Nuestro equipo</h1>
                        <p className="font-medium text-base leading-6 text-gray-600 dark:text-black">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem et architecto facilis quis dicta incidunt dolor nihil quidem repellendus voluptates optio magnam rerum sapiente, asperiores ipsa est debitis distinctio laudantium?
                        </p>
                    </div>
                    <div className="w-full lg:w-8/12 lg:pt-8">
                        <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 lg:gap-5 shadow-lg rounded-md">
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Image" />
                                <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Image" />
                                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-black mt-4">Alexa</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Image" />
                                <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Image" />
                                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-black mt-4">Olivia</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Image" />
                                <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Image" />
                                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-black mt-4">Liam</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured image" />
                                <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" />
                                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-black mt-4">Elijah</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured image" />
                                <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" />
                                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-black mt-4">Elijah</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About