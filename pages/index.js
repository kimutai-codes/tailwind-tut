import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<header className='flex justify-between text-cyan-700 font-medium px-3 py3 shadow-md mb-2 sticky top-0 bg-slate-300'>
				<Link href='/'>
					<a className='text-lg font-bold'>Logo</a>
				</Link>
				<ul className='hidden md:flex flex-row gap-4'>
					<li>
						<Link href=''>
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href=''>
							<a>About</a>
						</Link>
					</li>
					<li>
						<Link href=''>
							<a>Contacts</a>
						</Link>
					</li>
				</ul>

				<button className='md:hidden'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth='2'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M4 6h16M4 12h16m-7 6h7'
						/>
					</svg>
				</button>
			</header>

			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
				<div className='bg-cyan border-2 rounded-md border-cyan-600 px-2 py-2 m-1'>
					<h2 className='text-xs'>CATEGORY</h2>
					<h1 className='text-lg text-cyan-700 '>Tailwind Css</h1>
					<p className='leading-relaxed text-sm'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Error explicabo ad nemo labore veritatis sint
						voluptatibus nam soluta voluptatum nobis incidunt
						expedita aperiam, impedit, facere, ut quam voluptatem
						obcaecati! Vero?
					</p>
					<button className='text-white bg-slate-500 rounded-md py-0.5 px-3 text-lg customBtn'>
						Click Me
					</button>
				</div>

				<div className='bg-cyan border-2 rounded-md border-cyan-600 px-2 py-2 m-1'>
					<h2 className='text-xs'>CATEGORY</h2>
					<h1 className='text-lg text-cyan-700 '>Tailwind Css</h1>
					<p className='leading-relaxed text-sm'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Error explicabo ad nemo labore veritatis sint
						voluptatibus nam soluta voluptatum nobis incidunt
						expedita aperiam, impedit, facere, ut quam voluptatem
						obcaecati! Vero?
					</p>
					<button className='text-white bg-slate-500 rounded-md py-0.5 px-3 text-lg customBtn'>
						Click Me
					</button>
				</div>

				<div className='bg-cyan border-2 rounded-md border-cyan-600 px-2 py-2 m-1'>
					<h2 className='text-xs'>CATEGORY</h2>
					<h1 className='text-lg text-cyan-700 '>Tailwind Css</h1>
					<p className='leading-relaxed text-sm'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Error explicabo ad nemo labore veritatis sint
						voluptatibus nam soluta voluptatum nobis incidunt
						expedita aperiam, impedit, facere, ut quam voluptatem
						obcaecati! Vero?
					</p>
					<button className='text-white bg-slate-500 rounded-md py-0.5 px-3 text-lg customBtn'>
						Click Me
					</button>
				</div>

				<div className='bg-cyan border-2 rounded-md border-cyan-600 px-2 py-2 m-1'>
					<h2 className='text-xs'>CATEGORY</h2>
					<h1 className='text-lg text-cyan-700 '>Tailwind Css</h1>
					<p className='leading-relaxed text-sm'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Error explicabo ad nemo labore veritatis sint
						voluptatibus nam soluta voluptatum nobis incidunt
						expedita aperiam, impedit, facere, ut quam voluptatem
						obcaecati! Vero?
					</p>
					<button className='text-white bg-slate-500 rounded-md py-0.5 px-3 text-lg customBtn'>
						Click Me
					</button>
				</div>

				<div className='bg-cyan border-2 rounded-md border-cyan-600 px-2 py-2 m-1'>
					<h2 className='text-xs'>CATEGORY</h2>
					<h1 className='text-lg text-cyan-700 '>Tailwind Css</h1>
					<p className='leading-relaxed text-sm'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Error explicabo ad nemo labore veritatis sint
						voluptatibus nam soluta voluptatum nobis incidunt
						expedita aperiam, impedit, facere, ut quam voluptatem
						obcaecati! Vero?
					</p>
					<button className='text-white bg-slate-500 rounded-md py-0.5 px-3 text-lg customBtn'>
						Click Me
					</button>
				</div>

				<div className='bg-cyan border-2 rounded-md border-cyan-600 px-2 py-2 m-1'>
					<h2 className='text-xs'>CATEGORY</h2>
					<h1 className='text-lg text-cyan-700 '>Tailwind Css</h1>
					<p className='leading-relaxed text-sm'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Error explicabo ad nemo labore veritatis sint
						voluptatibus nam soluta voluptatum nobis incidunt
						expedita aperiam, impedit, facere, ut quam voluptatem
						obcaecati! Vero?
					</p>
					<button className='text-white bg-slate-500 rounded-md py-0.5 px-3 text-lg customBtn'>
						Click Me
					</button>
				</div>
			</div>
		</div>
	);
}
