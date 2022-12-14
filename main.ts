//% color="#AA278D" weight=100
namespace zoobuilder {
    //% block="build acqurium of size $size"
    //% size.defl=6
    //% size.min=6 size.max=100
    export function aquarium(size: number) {
        blocks.fill(
            GLASS,
            posCamera(-size / 2, 0, 5),
            posCamera(size / 2, size, 5 + size),
            FillOperation.Replace
        )
        blocks.fill(
            WATER,
            posCamera(-size / 2 + 1, 1, 6),
            posCamera(size / 2 - 1, size - 1, 4 + size),
            FillOperation.Replace
        )
    }
}