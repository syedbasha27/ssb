import { books, categories } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminBooksPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-brand-blue">Book Management</h1>
      <form className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-2">
        <Input placeholder="Book title" />
        <select className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm">
          <option>Category</option>
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <Input placeholder="Price" />
        <Input placeholder="Discounted price" />
        <Input placeholder="Stock" />
        <Input type="datetime-local" placeholder="Schedule publishing" />
        <Button className="md:col-span-2">Add / Update Book</Button>
      </form>
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-600">
            <tr>
              <th className="px-4 py-3">Title</th><th className="px-4 py-3">Category</th><th className="px-4 py-3">Price</th><th className="px-4 py-3">Stock</th><th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="border-t border-slate-100">
                <td className="px-4 py-3">{book.title}</td>
                <td className="px-4 py-3">{book.category}</td>
                <td className="px-4 py-3">₹{book.discountedPrice}</td>
                <td className="px-4 py-3">{book.stock}</td>
                <td className="px-4 py-3"><button className="text-brand-blue">Edit</button> · <button className="text-red-600">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
