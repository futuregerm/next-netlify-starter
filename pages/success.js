import Link from "next/link";

export default function Success() {
  return (
    <div>
      Success, your form has been submitted!<br/>
      <Link href='/'>Go back</Link>
    </div>
  )
}
