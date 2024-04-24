import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image';

function UserAvatar({
  name,
  image,
  className
}: {
  name : string,
  image : string,
  className ?: string
}) {
  return (
    <div className={cn('bg-white text-black',className)}>
        <Avatar>
            {image && (
              <Image
              src={image}
              alt={image}
              width={40}
              height={40}
              className="rounded-full"/>
            )}
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    </div>
  )
}

export default UserAvatar