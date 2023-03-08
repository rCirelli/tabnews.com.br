import { HeartIcon, HeartFillIcon } from '@primer/octicons-react';
import { IconButton } from '@primer/react';
import { useState } from 'react';

export default function FavoriteButton({ content }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    console.log(`/${content.owner_username}/${content.slug}`);
    setIsFavorite(!isFavorite);
  }

  return <IconButton variant="invisible" icon={isFavorite ? HeartFillIcon : HeartIcon} onClick={toggleFavorite} />;
}
