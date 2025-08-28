import { Card } from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Default Notifications</div>
      <div>
        <Link
          href="/complex-dashboard"
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          Default notifications
        </Link>
      </div>
    </Card>
  );
}
