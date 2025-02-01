import { BarChart } from '@toast-ui/chart';

// サンプルデータ
const data = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    series: [
        {
            name: 'Sales',
            data: [30, 40, 50, 45, 60, 55]
        }
    ]
};

// チャートオプション
const options = {
    chart: { 
        title: 'Monthly Sales',
        width: 800, 
        height: 400 
    }
};

// チャートの初期化
const chart = new BarChart({
    el: document.getElementById('chart'),
    data,
    options
});