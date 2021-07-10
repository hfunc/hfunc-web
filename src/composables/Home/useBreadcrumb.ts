import {inject, onUnmounted, onUpdated, provide, readonly, ref, Ref} from "vue";
import {RouteRecordNormalized, useRoute} from "vue-router";

interface BreadcrumbItem {
    title: string
    path: string
}

interface BreadcrumbContext {
    visible: Ref<boolean>;
    setVisible: (value: boolean) => void;
    routes: Ref<BreadcrumbItem[]>
    refresh: () => void
    push: (item: BreadcrumbItem) => void
}

const BreadcrumbSymbol = Symbol();

export function useBreadcrumbProvide(): BreadcrumbContext {

    const visible = ref(false)

    const route = useRoute()

    const getRoutes = (): BreadcrumbItem[] => {
        return route.matched.filter(value => {
            if (value.meta.title) {
                return true
            }
        }).map(value => {
            return {
                path: value.path,
                title: value.meta.title,
            } as BreadcrumbItem
        })
    }

    const routes = ref(getRoutes())
    const refresh = () => {
        routes.value = getRoutes()
    }
    const setVisible = (value: boolean) => {
        if (value) {
            refresh()
        }
        visible.value = value
    }
    const push = (item: BreadcrumbItem) => {
        routes.value.push(item)
    }
    const ctx: BreadcrumbContext = {
        visible: readonly(visible),
        setVisible,
        routes: routes,
        refresh,
        push
    }
    provide(BreadcrumbSymbol, ctx)
    onUpdated(() => {
        refresh()
    })
    return ctx
}

export function useBreadcrumbInject(): BreadcrumbContext {
    const ctx = inject<BreadcrumbContext>(BreadcrumbSymbol);
    onUnmounted(()=>{
        ctx?.setVisible(false)
    })
    if (!ctx) {
        throw new Error(`useBookListInject must be used after useBookListProvide`);
    }

    return ctx;
}
