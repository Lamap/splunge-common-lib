export enum ApiRoutes {
    SPG_POINT_CREATE = '/point',
    SPG_POINT_UPDATE_AND_DELETE = '/point/:id',
    SPG_POINTS_FETCH = '/points',
    SPG_IMAGE_CREATE = '/image',
    SPG_IMAGE_UPDATE_AND_DELETE = '/image/:id',
    SPG_IMAGE_RENDER = '/image/:id/render',
    SPG_IMAGES_FETCH = '/images',
    SPG_IMAGE_FETCH = '/image/:id',
    SPG_DETACH_POINT_FROM_IMAGE = '/image/:id/point',
    SPG_ATTACH_IMAGE_TO_POINT = '/point/:pointId/image/:imageId',
}
