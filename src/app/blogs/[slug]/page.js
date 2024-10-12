
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
];

export async function generateMetadata(
    { params },parent ) {
    
        const Blog = blogs.find((data)=> data.slug == params.slug)
   
    return {
      title: Blog.title,
      };
    }

export default function selectedblog({ params }){

    const Blog = blogs.find((data)=> data.slug == params.slug)
    
    return(
        <div className="container mx-auto text-center p-20">
            <h1 className="font-bold border border-blue-600 p-2 px-5">{Blog.description}</h1>
        </div>
    )
}