import Link from "next/link"


export default function Blogs(){
    const blogs =[
        {
            id: 1,
            title: "Owais",
            slug: "owais-iqbal-1",
            description: "My Name Is Owais Iqbal"
        },
        {
            id: 2,
            title: "Arslan",
            slug: "arslan-iqbal-2",
            description: "My Name Is Arslan Iqbal"
        },
        {
            id: 3,
            title: "Imran",
            slug: "imran-iqbal-3",
            description: "My Name Is Imran Iqbal"
        },
        {
            id: 4,
            title: "Kamran",
            slug: "kamran-iqbal-4",
            description: "My Name Is Kamran Iqbal"
        },
        {
            id: 5,
            title: "Iftikhar",
            slug: "iftikhar-iqbal-5",
            description: "My Name Is Iftikhar Iqbal"
        }
    ]
    return(
        <div className="container mx-auto text-center p-20 ">
            <h1 className="capitalize font-bold text-4xl text-red-500">All blogs here</h1>
        {
            blogs.map((data)=> <Link key={data.id} href={`/blogs/${data.slug}`}>
            <h1
            className="border border-purple-500 p-2 px-4 text-center my-2 text-black hover:bg-purple-400 hover:text-white"
            >{data.title}</h1></Link>)
        }

            
        </div>
    )
}