import { useRef, useMemo, useCallback, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import useMedia from 'use-media';

import { screen } from 'utils/media';
import { IToursim } from 'types';
import Card from '../Card';

type CardListProps = {
    data: IToursim[];
    hasMore: boolean;
    setLastId: React.Dispatch<React.SetStateAction<string | null>>;
    loading: boolean;
}

const CardList: React.FC<CardListProps> = ({ data, hasMore, setLastId, loading }) => {
    const location = useLocation();
    let listRef: List| null = null;
    const observer = useRef<IntersectionObserver>();

    const isMobile = useMedia({ maxWidth: screen.mobile })
    const isTablet = useMedia({ maxWidth: screen.tablet })
    const listWidth = useMemo(() => {
        if (isMobile || isTablet) {
            return 438;
        } else {
            return 244;
        }
    }, [isMobile, isTablet]);

    useEffect(() => {
        setLastId(null);
        listRef?.scrollToItem(0);
    }, [location.pathname])
    
    const lastItemRef = useCallback(node => {
        if(loading) {
            return;
        };

        if(observer.current) {
            // stops watching all of its target elements for visibility changes.
            observer.current.disconnect();
        }

        const callback = (entries: IntersectionObserverEntry[]) => { 
            if(entries[0].isIntersecting && hasMore) {
                // @ts-ignore
                setLastId(node.dataset.id);
            }
        };

        observer.current = new IntersectionObserver(callback)

        if(node) observer.current.observe(node)
    }, [loading, hasMore])

    const Item = ({ index, style }: { index: number, style: React.CSSProperties }) => {
        if (data.length === index + 1) {
            return (
                <div style={style} ref={lastItemRef} data-id={index + 1}>
                    <Card
                        name={data[index].Name}
                        description={data[index].Description}
                        address={data[index].Address}
                        updateTime={data[index].UpdateTime}
                        ticketInfo={data[index].TicketInfo}
                        picture={data[index].Picture.PictureUrl1}
                        category={data[index].Class1}
                        loading={loading}
                    />
                </div>
            )
        }
        else {
            return (
                <div style={style}>
                    <Card
                        name={data[index].Name}
                        description={data[index].Description}
                        address={data[index].Address}
                        updateTime={data[index].UpdateTime}
                        ticketInfo={data[index].TicketInfo}
                        picture={data[index].Picture.PictureUrl1}
                        category={data[index].Class1}
                    />
                </div>
            )
        }
    }

    return (
        <AutoSizer>
            {({ height, width }) => (
                <List
                    height={isMobile ? height : height - 92}
                    width={width}
                    itemCount={data.length}
                    itemSize={listWidth}
                    itemData={data}
                    ref={(c) => listRef = c}
                >
                    {Item}
                </List>
            )}
        </AutoSizer>
    )
}

export default CardList;