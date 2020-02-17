var SJ_setiings = {
                options: {
                    hlw: true, // Высота как ширина
                    wlh: true, // Ширина как высота
                    hlt: true, // Высотка как у другого блока
                    wlt: true, // Ширина как у другого блока
                    alo: true, // Высота у всех блоков родителя одинаковая
                },
                settings: {
                    windowResize: true, // Выполнять заново при изменении экрана
                    writeHystory: true // Писать историю
                }
            }
    var sj = new SJ(SJ_setiings);