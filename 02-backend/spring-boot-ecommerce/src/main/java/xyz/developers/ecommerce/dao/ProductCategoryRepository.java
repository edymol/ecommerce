package xyz.developers.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import xyz.developers.ecommerce.entity.ProductCategory;


@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
// productCategory is Name of JSON entry - product-category is the uri path
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
