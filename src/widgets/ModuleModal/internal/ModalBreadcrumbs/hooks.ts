import {selectModule} from "../../../../features/store/content/module";
import {useSelector} from "react-redux";
import {useMatch} from "react-router-dom";

export const useModalBreadcrumbs = () => {
    const {id} = useSelector(selectModule)
    const matchModule = useMatch('breed/module/:id')

    if (matchModule) {
        return {
            breadcrumbs: [
                {
                    title: 'модуль',
                    path: '',
                    show: true,
                    active: true,
                }
            ]
        }
    }


    return {
        breadcrumbs: [
            {
                title: 'модуль',
                path: id ? `module/${id}` : '/breed',
                show: true,
                active: false
            },
            {
                title: 'урок',
                path: '',
                show: true,
                active: true
            }
        ]
    }
}
