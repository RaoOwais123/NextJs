import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex flex-wrap flex-col gap-6  container mx-auto text-center my-4 ">
      <h1 className="capitalize font-bold text-4xl text-red-500">Dashboard</h1>
      <Link href={"/dashboard/setting"}>
        <button className="p-2 px-4 bg-orange-500 rounded">Settings</button>
      </Link>

      <Link href={"/dashboard/profile"}>
        <button className="p-2 px-4 bg-orange-500 rounded">My Profile</button>
      </Link>
    </div>
  );
}
