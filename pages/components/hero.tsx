

export default function HeroSection (){
    return(
        <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 xl:max-w-3xl">
		<h1 className="text-6xl font-bold leading-none sm:text-7xl">Have you ever been <br/>
			<span className="dark:text-violet-400">rugged before?</span>
		</h1>
		<p className="px-8 mt-14 mb-12 text-xl">{`Us too, that's why we decided to create a place to let others talk about the validity of projects.`}</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900">Go to forum</button>
			<button className="px-8 py-3 m-2 text-lg border rounded dark:text-coolGray-50 dark:border-coolGray-700">Learn our story</button>
		</div>
	</div>
</section>
    );
}