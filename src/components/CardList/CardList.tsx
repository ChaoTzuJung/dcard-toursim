import { useRef, useMemo } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import useMedia from 'use-media';

import { IToursim } from 'types';
import { screen } from 'utils/media';
import useIntersectionObserver from "hook/useIntersectionObserver";
import Card from 'components/Card';

type CardListProps = {
    data: IToursim[] | undefined;
    hasMore: boolean | undefined;
    loading: boolean;
    fetching: boolean;
    getMore: () => void;
}

const CardList: React.FC<CardListProps> = ({ data, hasMore, loading, fetching, getMore }) => {
    const isMobile = useMedia({ maxWidth: screen.mobile })
    const isTablet = useMedia({ maxWidth: screen.tablet })
    const listWidth = useMemo(() => {
        if (isMobile || isTablet) {
            return 438;
        } else {
            return 244;
        }
    }, [isMobile, isTablet]);

    if(loading || !data) return <p>First Loading...</p>

    const Item = ({ index, style }: { index: number, style: React.CSSProperties }) => {
        const lastItemRef = useRef() as React.MutableRefObject<HTMLInputElement>;
        const entry = useIntersectionObserver(lastItemRef, {});
        !!entry?.isIntersecting && hasMore && getMore();
            
        return data?.length === index + 1 ? (
            <div style={style} ref={lastItemRef} data-id={index + 1}>
                <Card
                    name={data[index].Name}
                    description={data[index].Description}
                    address={data[index].Address}
                    updateTime={data[index].UpdateTime}
                    ticketInfo={data[index].TicketInfo}
                    picture={data[index].Picture.PictureUrl1}
                    category={data[index].Class1}
                    loading={loading || fetching}
                />
            </div>
        ) : (
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
        );
    }

    return (
        <AutoSizer>
            {({ height, width }) => (
                <List
                    height={isMobile ? height : height - 94}
                    width={width}
                    itemCount={data.length}
                    itemSize={listWidth}
                    itemData={data}
                >
                    {/* @ts-ignore */}
                    {Item}
                </List>
            )}
        </AutoSizer>
    )
}

export default CardList;