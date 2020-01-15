import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';

const LazyLoadingProduct = lazy(() => import('./Product'));

import Cart from './Cart';
import './Cards.scss';
import Spinner from './Spinner';

export default function Cards() {
  const cards = useSelector(state => state.products);

  return (
    <div className="dashboard__container">
      <Cart />
      <div className="card">
        <ul className="card__container">
          {cards &&
            cards.map(card => (
              <Suspense key={card.id} fallback={<Spinner />}>
                <LazyLoadingProduct key={card.id} card={card} />
              </Suspense>
            ))}
        </ul>
      </div>
    </div>
  );
}
