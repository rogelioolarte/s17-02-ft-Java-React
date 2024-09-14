import ProfileFormik from "../components/forms/ProfileFormik";

export default function ProfilePage() {
  return (
    <div className="flex justify-center min-h-full w-full">
      <ProfileFormik type="update" />
    </div>
  )
}
