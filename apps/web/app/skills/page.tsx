export default function Skills() {
    return (
        <div className="max-w-xl mx-auto">
            <div className="my-4">
                <div className="flex flex-wrap items-center">
                    <div className="flex-none text-8xl font-bold text-primary-ultramarine">
                        69
                    </div>
                    <div className="flex-1 p-4">
                        Chief Information Officer (CIO)
                    </div>
                    <div className="flex-1 md:flex-none">
                        <button className="bg-primary-aquamarine text-primary-deepsea font-bold uppercase px-4 py-2 rounded drop-shadow-md hover:outline hover:outline-primary-ultramarine hover:outline-3">
                            Not correct?
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-8 py-8 px-8 text-center">
                Intersted in other job titles? You can see your FitScore for
                4000+ roles in our library.
            </div>
            <div className="my-8">
                <h1 className="text-xl mb-4">Your Skills</h1>
                <ul className="flex flex-wrap -mx-2">
                    <li className="m-2 px-2 py-1 text-white outline outline-white outline-2 rounded">
                        Advertising
                    </li>
                    <li className="m-2 px-2 py-1 text-white outline outline-white outline-2 rounded">
                        Analysis
                    </li>
                    <li className="m-2 px-2 py-1 text-white outline outline-white outline-2 rounded">
                        Business Analysis
                    </li>
                    <li className="m-2 px-2 py-1 text-white outline outline-white outline-2 rounded">
                        Business Development
                    </li>
                    <li className="m-2 px-2 py-1 text-white outline outline-white outline-2 rounded">
                        Business Strategy
                    </li>
                </ul>
            </div>
            <div className="my-8">
                <h1 className="text-xl mb-4">Your Experiences</h1>
                <div className="grid grid-cols-3 gap-4 my-2">
                    <div className="">Experience 1</div>
                    <div className="">website.com</div>
                    <div className="text-right">2020-Present</div>
                </div>
                <div className="grid grid-cols-3 gap-4 my-2">
                    <div className="">Experience 2</div>
                    <div className="">website2.com</div>
                    <div className="text-right">2018-2020</div>
                </div>
            </div>
        </div>
    );
}
