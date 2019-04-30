import numpy as np

COSINE = "cosine"
EUCLIDEAN = "euclidean"


def get_eucledan_distances(base_vec: np.ndarray, target_vecs: np.ndarray, ignore):
    targets_minus_base = target_vecs - base_vec
    distances_from_base = np.linalg.norm(targets_minus_base, axis=1)
    return distances_from_base


def get_cosine_distances(base_vec: np.ndarray, target_vecs: np.ndarray, target_vecs_magnitudes: np.ndarray):
    base_magnitude = np.linalg.norm(base_vec)
    denominators = target_vecs_magnitudes * base_magnitude
    numerators = (np.dot(target_vecs, base_vec))
    cosines = numerators / denominators
    return 0.5 * (1 - cosines)


def get_dist_method(requested_dist_method):
    if requested_dist_method == COSINE:
        return get_cosine_distances
    else:
        return get_eucledan_distances