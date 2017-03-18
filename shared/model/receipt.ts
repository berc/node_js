/**
 * Created by rastislavbertusek on 06.03.17.
 */

interface ReceiptItem {
    name: string;
    count: number;
}

export interface Receipt {
    items: ReceiptItem[];
    totalSum: number;
}
