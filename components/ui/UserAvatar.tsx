import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image';

function UserAvatar({
  name,
  image,
  className
}: {
  name?: string | null,
  image?: string | null,
  className?: string
}) {
  return (
    <div className={cn("bg-white text-black", className)}>
      <Avatar>
        {image && (
          <Image
            src={image}
            alt={image}
            width={40}
            height={40}
            className="rounded-full" />
        )}
        <AvatarFallback
          delayMs={1000}
          className="dark:bg-white dark:text-white text-lg">
          {name
            ?.split(' ')
            .map((n) => n[0])
            .join(' ')}
        </AvatarFallback>
      </Avatar>
    </div>
  )
}

export default UserAvatar