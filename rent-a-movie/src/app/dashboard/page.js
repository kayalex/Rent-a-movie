// // pages/admin/dashboard.js

// import { useSession } from "next-auth/client";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

// export default function AdminDashboard() {
//   const [session, loading] = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     if (!loading) {
//       if (!session || session.user.role !== "admin") {
//         router.push("/auth/signin");
//       }
//     }
//   }, [loading, session, router]);

//   if (loading || !session) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className='min-h-screen bg-slate-950 text-white'>
//       <header className='bg-red-600 p-4'>
//         <h1 className='text-2xl font-bold'>Admin Dashboard</h1>
//       </header>
//       <main className='p-4'>
//         <section className='mb-8'>
//           <h2 className='text-xl font-semibold mb-4'>Overview</h2>
//           <div className='bg-slate-900 p-4 rounded-lg'>
//             <p>Welcome back, {session.user.firstName}!</p>
//             <p className='mt-2'>
//               Here's a quick overview of your store's performance.
//             </p>
//             <ul className='mt-4 space-y-2'>
//               <li>Total Users: 120</li>
//               <li>Total Movies: 45</li>
//               <li>Active Rentals: 30</li>
//             </ul>
//           </div>
//         </section>
//         <section className='mb-8'>
//           <h2 className='text-xl font-semibold mb-4'>User Management</h2>
//           <div className='bg-slate-900 p-4 rounded-lg'>
//             <p>Manage your users here. View, edit, or delete user accounts.</p>
//             <button className='mt-4 bg-red-600 px-4 py-2 rounded'>
//               View Users
//             </button>
//           </div>
//         </section>
//         <section className='mb-8'>
//           <h2 className='text-xl font-semibold mb-4'>Movie Management</h2>
//           <div className='bg-slate-900 p-4 rounded-lg'>
//             <p>Manage your movies here. Add, edit, or delete movie entries.</p>
//             <button className='mt-4 bg-red-600 px-4 py-2 rounded'>
//               Manage Movies
//             </button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
